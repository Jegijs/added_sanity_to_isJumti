import Link from "next/link";
import { Button } from "@/components/ui/button";
import Container from "@/components/layout/Container";

export default function NotFound() {
    return (
        <Container className="flex min-h-[60vh] flex-col items-center justify-center text-center gap-4">

            <h1 className="text-7xl font-extrabold text-primary">404</h1>

            <h2 className="text-2xl font-bold tracking-tight">
                Lapa nav atrasta
            </h2>

            <p className="text-muted-foreground max-w-[500px]">
                Atvainojiet, bet meklētā lapa neeksistē vai ir pārvietota.
                Pārbaudiet adresi vai atgriezieties sākumlapā.
            </p>

            <div className="mt-4">
                <Button asChild variant="default" size="lg">
                    <Link href="/">
                        Atgriezties uz Sākumu
                    </Link>
                </Button>
            </div>

        </Container>
    );
}