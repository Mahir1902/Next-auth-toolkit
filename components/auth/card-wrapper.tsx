import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Header from "./header";
import Social from "./social";
import BackButton from "./back-button";

type Props = {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
};


// Wrapper for the login and register forms
export default function CardWrapper({
  children,
  headerLabel,
  backButtonHref,
  backButtonLabel,
  showSocial,
}: Props) {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
            <Social/>
        </CardFooter>
      ) }
      <CardFooter>
        <BackButton
            label={backButtonLabel}
            href={backButtonHref}
        />
      </CardFooter>
    </Card>
  );
}
