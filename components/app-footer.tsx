import Link from "next/link"

export function AppFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-semibold mb-2">SafeHer</h3>
            <p className="text-sm text-muted-foreground">
              Empowering young women in Sierra Leone with sexual health education and support.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-2">Learn</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/modules" className="text-muted-foreground hover:text-foreground">
                  Learning Modules
                </Link>
              </li>
              <li>
                <Link href="/ask" className="text-muted-foreground hover:text-foreground">
                  Ask Questions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-2">Support</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/resources" className="text-muted-foreground hover:text-foreground">
                  Local Resources
                </Link>
              </li>
              <li>
                <Link href="/emergency" className="text-muted-foreground hover:text-foreground">
                  Emergency Help
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-2">Emergency</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="tel:999" className="text-muted-foreground hover:text-foreground">
                  Emergency: 999
                </a>
              </li>
              <li>
                <a href="tel:+23276123456" className="text-muted-foreground hover:text-foreground">
                  Youth Helpline
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-6 pt-6 text-center text-sm text-muted-foreground">
          <p>
            &copy; 2024 SafeHer. All rights reserved. |{" "}
            <Link href="/privacy" className="hover:text-foreground">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link href="/terms" className="hover:text-foreground">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
