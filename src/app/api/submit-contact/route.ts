import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    const filePath = path.resolve(process.cwd(), 'src/config/contact.ts');
    
    let contacts = [];
    try {
      // Read the existing contacts
      const fileContent = await fs.readFile(filePath, 'utf-8');
      // Find the array and parse it
      const match = fileContent.match(/\[\s*({[\s\S]*?})\s*\]/);
      if (match) {
        contacts = JSON.parse(`[${match[1]}]`);
      } else {
        contacts = [];
      }
    } catch (readError: any) {
      // If the file doesn't exist or there's an error reading, initialize with an empty array
      if (readError.code === 'ENOENT') {
        // Create the file if it doesn't exist
        await fs.writeFile(filePath, 'export const contactInfo = [];', 'utf-8');
      } else {
        console.error('Error reading contacts file:', readError);
        return NextResponse.json(
          { error: `Could not read contacts: ${readError.message}` },
          { status: 500 }
        );
      }
    }
    
    // Add the new contact
    contacts.push({ name, email, message });
    
    // Write the updated contacts back to the file
    await fs.writeFile(filePath, `export const contactInfo = ${JSON.stringify(contacts)};`, 'utf-8');
    return NextResponse.json({ message: 'Submission saved successfully.' }, { status: 200 });
  } catch (error: any) {
    console.error('Error saving submission:', error);
    return NextResponse.json({ error: `Could not save submission: ${error.message}` },
      { status: 500 }
    );
  }
}