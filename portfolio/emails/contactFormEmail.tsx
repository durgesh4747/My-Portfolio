import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";


interface ContactFormEmailProps {
  name: string;
  email: string;
  type:string;
  currency:string,
  budget:string;
  message: string;
}

export default function ContactFormEmail({
  name,
  email,
  type,
  currency,
  budget,
  message,

}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Hey, there&apos;s a new message from your Portfolio</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans">
          <Container className="bg-white border border-gray-200 my-10 px-10 py-4 rounded-md shadow-md">
            <Heading className="text-xl font-bold text-gray-800">
              Hey Durgesh! You have got a project request!
            </Heading>
            <Text className="text-gray-700">
              <strong>From:</strong> {name}
            </Text>
            <Text className="text-gray-700">
              <strong>Email:</strong> {email}
            </Text>
            <Section className="bg-gray-50 p-4 rounded-md border border-gray-100 my-4">
              <Text className="text-yellow-500">Project Type : {type} </Text>
              <Text className="text-emerald-500">Budget : {budget} {currency}</Text>
              <Text className="text-gray-600 italic">{message}</Text>
            </Section>
            <Text className="text-xs text-gray-400 mt-4">
              Reply directly to this email to respond to {name}.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
