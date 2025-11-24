import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const data = contactFormSchema.parse(req.body);
      
      // Log the submission (submissions are visible in server logs)
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
      console.log("📧 NEW CONTACT FORM SUBMISSION");
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
      console.log("From:", data.name);
      console.log("Email:", data.email);
      console.log("Subject:", data.subject);
      console.log("Message:", data.message);
      console.log("Time:", new Date().toISOString());
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

      /* 
       * CUSTOMIZE: Add email delivery here
       * 
       * Option 1: Use Replit Email Integrations (Recommended)
       * - Set up SendGrid, Resend, or AgentMail integration
       * - These handle API keys and credentials automatically
       * - Example with Resend:
       *   import { resend } from '@replit/integrations';
       *   await resend.emails.send({
       *     from: 'portfolio@yourdomain.com',
       *     to: 'your.email@example.com',
       *     subject: `Portfolio Contact: ${data.subject}`,
       *     text: `From: ${data.name} (${data.email})\n\n${data.message}`
       *   });
       * 
       * Option 2: Direct Email Service Integration
       * - Install an email package (nodemailer, sendgrid, etc.)
       * - Configure with your SMTP credentials or API keys
       * - Store credentials in environment variables
       * 
       * Option 3: Store in Database for Review
       * - Create a "contact_submissions" table in the database
       * - Save all form data for review in admin panel
       * - Optionally combine with email notifications
       */
      
      res.json({ 
        success: true, 
        message: "Message received successfully" 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Invalid form data" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
