import { inngest, syncUserCreation, syncUserDeletion, syncUserUpdation } from "@/Config/Inngest";
import { serve } from "inngest/next";

export const { GET, POST } = serve({
    client: inngest,
    functions: [
        syncUserCreation,
        syncUserUpdation,
        syncUserDeletion
    ]
});
