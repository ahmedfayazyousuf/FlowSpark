import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;

  if (method === 'GET') {
    const { date } = req.query;

    if (!date) {
      return res.status(400).json({ error: 'Date is required' });
    }

    try {
      const dateOnly = new Date(date.split(' ')[0]);

      const bookings = await prisma.booking.findMany({
        where: {
          date: {
            gte: dateOnly,
            lt: new Date(dateOnly.getTime() + 24 * 60 * 60 * 1000),
          },
        },
        select: {
          time: true,
        },
      });

      res.status(200).json(bookings);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch bookings' });
    }
  } else if (method === 'POST') {
    const { date, time, fullName, email, phoneNumber, callNotes, consent } = req.body;

    if (!date || !time || !fullName || !email) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    try {
      const newBooking = await prisma.booking.create({
        data: {
          date,
          time,
          fullName,
          email,
          phoneNumber,
          callNotes,
          consent,
        },
      });

      res.status(201).json(newBooking);
    } catch (error) {
      res.status(500).json({ error: 'Error creating booking' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
