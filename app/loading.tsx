import { Loader2 } from "lucide-react";
import Container from "@/components/layout/Container";

export default function Loading() {
    return (
        // Center the spinner vertically and horizontally
        <Container className="flex min-h-[60vh] w-full items-center justify-center">
            <div className="flex flex-col items-center gap-2">
                {/* Animated Spinner */}
                <Loader2 className="h-10 w-10 animate-spin text-primary" />
                <p className="text-sm text-muted-foreground animate-pulse">
                    Notiek ielāde...
                </p>
            </div>
        </Container>
    );
}