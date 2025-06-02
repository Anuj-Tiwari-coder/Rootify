import { inngest, syncUserCreation, syncUserDeletion, syncUserUpdation } from "@/Config/Inngest";
import { serve } from "inngest/next";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
    client: inngest,
    functions: [
        syncUserCreation,
        syncUserUpdation,
        syncUserDeletion
    ],
});
