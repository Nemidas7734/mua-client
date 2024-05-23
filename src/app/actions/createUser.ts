'use server'

import { sql } from '@vercel/postgres';
// import { revalidatePath } from 'next/cache';
import { z } from 'zod';

export async function createUser(prevState : any, formData : FormData) {
    //Use zod to validate the data
    const schema = z.object({
        name : z.string(),
    })

    const data = schema.parse({
        name : formData.get('name')
    })
    try {
        await sql`INSERT INTO users (text) VALUES (${data.name})`

        // revalidatePath('/')
        return { message : `Added user ${data.name}` }
    } catch (e) {
        return { message : 'Failed to add user'}
    }
    
}