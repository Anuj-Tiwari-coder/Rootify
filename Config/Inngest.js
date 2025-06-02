import { Inngest } from "inngest";
import connectDb from "./db";
import User from "@/Models/User";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "rootify-next" });

//  Inngest function to save user data to a database

export const syncUserCreation = inngest.createFunction(
    {
        id: 'sync-user-from-clerk'
    },
    {
        event: 'clerk/user.created'
    },
    async ({ event }) => {
        const { id, image_url, first_name, last_name, phone_numbers, email_addresses } = event.data
        const userData = {
            _id: id,
            name: first_name + '' + last_name,
            PhoneNumber: phone_numbers[0].phone_number,
            email: email_addresses[0].email_address,
            imageUrl: image_url
        }
        await connectDb()
        await User.create(userData)
    }
)

// Inngest Function to update user data in databse
export const syncUserUpdation = inngest.createFunction(
    { id: 'update-user-form-clerk' },
    { event: 'clerck/user.updated' },
    async ({ event }) => {
        const { id, image_url, first_name, last_name, phone_numbers, email_addresses } = event.data
        const userData = {
            _id: id,
            name: first_name + '' + last_name,
            PhoneNumber: phone_numbers[0].phone_number,
            email: email_addresses[0].email_address,
            imageUrl: image_url
        }
        await connectDb()
        await User.findByIdAndUpadte(id, userData)
    }
)

// Inngest function to delete from databse
export const syncUserDeletion = inngest.createFunction({
    id: 'delete-user-with-clerk'
},
    {
        event: 'clerk/user.deleted'
    },
    async ({ event }) => {
        const { id } = event.data
        await connectDb()
        await User.findByIdAndDelete(id)
    }
)