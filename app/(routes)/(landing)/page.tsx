import { Button } from "@/components/ui/button";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";

const Page = () => {
  return (
    <div>
      <header>
        Landing Page
        <LoginLink>
          <Button>
            SignIn
          </Button>
        </LoginLink>
      </header>
    </div>
  )
}

export default Page;
