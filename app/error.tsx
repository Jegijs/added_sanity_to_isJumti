"use client" // <--- This is MANDATORY for error pages

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Container from "@/components/layout/Container";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {

    // Log the error to console when it happens
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <Container className="flex min-h-[60vh] flex-col items-center justify-center text-center">
            <h2 className="text-3xl font-bold tracking-tight text-red-600 mb-4">
                Kaut kas nogāja greizi!
            </h2>
            <p className="text-muted-foreground mb-8 max-w-[500px]">
                Mēs atvainojamies. Notika neparedzēta sistēmas kļūda.
                Lūdzu, mēģiniet pārlādēt lapu.
            </p>

            {/* Attempt to recover by trying to re-render the segment */}
            <Button
                onClick={() => reset()}
                variant="default"
            >
                Mēģināt vēlreiz
            </Button>
        </Container>
    );
}