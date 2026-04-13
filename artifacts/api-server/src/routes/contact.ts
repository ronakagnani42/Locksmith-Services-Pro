import { Router, type IRouter } from "express";
import { db, inquiriesTable } from "@workspace/db";
import { SubmitContactBody, ListInquiriesResponse } from "@workspace/api-zod";

const router: IRouter = Router();

router.post("/contact", async (req, res): Promise<void> => {
  const parsed = SubmitContactBody.safeParse(req.body);
  if (!parsed.success) {
    req.log.warn({ errors: parsed.error.message }, "Invalid contact form submission");
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const { name, phone, email, service, message, contactPreference } = parsed.data;

  const [inquiry] = await db
    .insert(inquiriesTable)
    .values({
      name,
      phone,
      email,
      service,
      message,
      contactPreference,
    })
    .returning();

  req.log.info({ id: inquiry.id }, "Contact form submitted");

  res.status(201).json({
    id: inquiry.id,
    message: "Thank you for your inquiry. We'll be in touch shortly.",
    createdAt: inquiry.createdAt.toISOString(),
  });
});

router.get("/inquiries", async (req, res): Promise<void> => {
  const inquiries = await db
    .select()
    .from(inquiriesTable)
    .orderBy(inquiriesTable.createdAt);

  res.json(
    ListInquiriesResponse.parse(
      inquiries.map((i) => ({
        id: i.id,
        name: i.name,
        phone: i.phone,
        email: i.email,
        service: i.service,
        message: i.message,
        contactPreference: i.contactPreference,
        status: i.status,
        createdAt: i.createdAt.toISOString(),
      }))
    )
  );
});

export default router;
