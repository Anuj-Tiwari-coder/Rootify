import { serve } from "inngest/next";
import { inngest, syncUserCreation, syncUserUpdation, syncUserDeletion } from "@/Config/Inngest";

export const { GET, POST } = serve({
    client: inngest,
    functions: [syncUserCreation, syncUserUpdation, syncUserDeletion],
});
