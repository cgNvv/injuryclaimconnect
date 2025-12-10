import { NextRequest, NextResponse } from 'next/server';

/*
 * FORM SUBMISSION API ROUTE
 *
 * This endpoint handles form submissions from the Final CTA section.
 *
 * IMPLEMENTATION OPTIONS:
 *
 * 1. Email Integration (SendGrid, Mailgun, etc.)
 * 2. CRM Integration (HubSpot, Salesforce, etc.)
 * 3. Database Storage (PostgreSQL, MongoDB, etc.)
 * 4. Webhook to external service
 *
 * Current implementation: Basic validation + logging
 * Replace with your preferred method below.
 */

interface FormData {
  'firm-name': string;
  'contact-name': string;
  email: string;
  phone: string;
  state: string;
  'monthly-volume': string;
}

export async function POST(request: NextRequest) {
  try {
    const formData: FormData = await request.json();

    // Validate required fields
    const requiredFields: (keyof FormData)[] = [
      'firm-name',
      'contact-name',
      'email',
      'phone',
      'state',
      'monthly-volume',
    ];

    const missingFields = requiredFields.filter((field) => !formData[field]);

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing required fields',
          missingFields,
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid email format',
        },
        { status: 400 }
      );
    }

    // ==================================================
    // TODO: IMPLEMENT YOUR PREFERRED METHOD BELOW
    // ==================================================

    // OPTION 1: Send Email (Example with SendGrid)
    // -------------------------------------------------
    // import sgMail from '@sendgrid/mail';
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
    //
    // const msg = {
    //   to: 'sales@injuryclaimconnect.com',
    //   from: 'noreply@injuryclaimconnect.com',
    //   subject: `New Lead Request from ${formData['firm-name']}`,
    //   html: `
    //     <h2>New MVA Lead Request</h2>
    //     <p><strong>Law Firm:</strong> ${formData['firm-name']}</p>
    //     <p><strong>Contact Name:</strong> ${formData['contact-name']}</p>
    //     <p><strong>Email:</strong> ${formData.email}</p>
    //     <p><strong>Phone:</strong> ${formData.phone}</p>
    //     <p><strong>State(s):</strong> ${formData.state}</p>
    //     <p><strong>Monthly Volume:</strong> ${formData['monthly-volume']}</p>
    //   `,
    // };
    //
    // await sgMail.send(msg);

    // OPTION 2: Save to Database (Example with PostgreSQL/Prisma)
    // -------------------------------------------------
    // import { prisma } from '@/lib/prisma';
    //
    // await prisma.leadRequest.create({
    //   data: {
    //     firmName: formData['firm-name'],
    //     contactName: formData['contact-name'],
    //     email: formData.email,
    //     phone: formData.phone,
    //     state: formData.state,
    //     monthlyVolume: formData['monthly-volume'],
    //     createdAt: new Date(),
    //   },
    // });

    // OPTION 3: HubSpot Integration
    // -------------------------------------------------
    // const hubspotResponse = await fetch(
    //   'https://api.hsforms.com/submissions/v3/integration/submit/{portalId}/{formId}',
    //   {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //       fields: [
    //         { name: 'firm_name', value: formData['firm-name'] },
    //         { name: 'firstname', value: formData['contact-name'].split(' ')[0] },
    //         { name: 'email', value: formData.email },
    //         { name: 'phone', value: formData.phone },
    //         { name: 'state', value: formData.state },
    //         { name: 'monthly_volume', value: formData['monthly-volume'] },
    //       ],
    //     }),
    //   }
    // );

    // OPTION 4: Slack Notification
    // -------------------------------------------------
    // await fetch(process.env.SLACK_WEBHOOK_URL!, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     text: `🚀 New Lead Request from *${formData['firm-name']}*`,
    //     blocks: [
    //       {
    //         type: 'section',
    //         fields: [
    //           { type: 'mrkdwn', text: `*Firm:*\n${formData['firm-name']}` },
    //           { type: 'mrkdwn', text: `*Contact:*\n${formData['contact-name']}` },
    //           { type: 'mrkdwn', text: `*Email:*\n${formData.email}` },
    //           { type: 'mrkdwn', text: `*Phone:*\n${formData.phone}` },
    //           { type: 'mrkdwn', text: `*State:*\n${formData.state}` },
    //           { type: 'mrkdwn', text: `*Volume:*\n${formData['monthly-volume']}` },
    //         ],
    //       },
    //     ],
    //   }),
    // });

    // ==================================================
    // END IMPLEMENTATION SECTION
    // ==================================================

    // For now, just log to console (development only)
    console.log('Form submission received:', formData);

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Your request has been submitted successfully. We will contact you within 24 hours.',
    });
  } catch (error) {
    console.error('Form submission error:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'An error occurred while processing your request. Please try again.',
      },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
