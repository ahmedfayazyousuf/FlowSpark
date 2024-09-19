import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { fullName, email, consent } = req.body;

    if (!fullName || !email) {
      return res.status(400).json({ error: 'Full Name and Email are required' });
    }

    try {
      const lead = await prisma.lead.create({
        data: {
          fullName,
          email,
          consent,
        },
      });
      res.status(201).json(lead);
    } catch (error) {
      res.status(500).json({ error: 'Error creating lead' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
