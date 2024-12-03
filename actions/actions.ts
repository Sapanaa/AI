'use client'
import {auth} from '@clerk/nextjs/server'

export async function createNewDocument() {
    auth().protect();

    const {sessionClaims} = await auth();

    
}