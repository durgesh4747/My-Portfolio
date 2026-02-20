import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

interface ContactFormEmailProps {
  name: string;
  email: string;
  type: string;
  currency: string;
  budget: string;
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
  const currencySymbol =
    currency === "INR"
      ? "₹"
      : currency === "USD"
        ? "$"
        : currency === "EUR"
          ? "€"
          : currency === "GBP"
            ? "£"
            : "¤";

  return (
    <Html>
      <Head />
      <Preview>
        Briefing: {type} from {name}
      </Preview>
      <Tailwind>
        <Body className="bg-[#f8fafc] font-sans py-12">
          <Container className="bg-white border border-[#e2e8f0] mx-auto rounded-3xl overflow-hidden shadow-sm max-w-145">
            {/* Header */}
            <Section className="bg-[#0f172a] p-10 text-center">
              <Text className="text-[#22d3ee] font-mono text-[11px] font-bold tracking-[0.3em] uppercase m-0 mb-2">
                System_Status: Incoming_Request
              </Text>
              <Heading className="text-white text-[28px] font-bold m-0 leading-tight">
                Project <span className="text-[#22d3ee]">Briefing</span>
              </Heading>
            </Section>

            <Section className="p-10">
              {/* Details */}
              <Section className="mb-8">
                <table className="w-full">
                  <tr>
                    <td className="pb-4">
                      <Text className="text-[#515760] font-mono text-[10px] font-semibold uppercase tracking-widest m-0">
                        Client_Name
                      </Text>
                      <Text className="text-[#1e293b] text-[16px] font-semibold m-0">
                        {name}
                      </Text>
                    </td>
                    <td className="pb-4 text-right">
                      <Text className="text-[#515760] font-mono text-[10px] font-semibold uppercase tracking-widest m-0">
                        Contact_Link
                      </Text>
                      <Link
                        href={`mailto:${email}`}
                        className="text-[#0891b2] text-[15px] font-medium m-0 underline"
                      >
                        {email}
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="pt-4 border-t border-[#f1f5f9]">
                      <Text className="text-[#515760] font-mono text-[10px] font-semibold uppercase tracking-widest m-0">
                        Project_Type
                      </Text>
                      <Text className="text-[#7c3aed] text-[15px] font-bold m-0">
                        {type}
                      </Text>
                    </td>
                    <td className="pt-4 border-t border-[#f1f5f9] text-right">
                      <Text className="text-[#515760] font-mono text-[10px] font-semibold uppercase tracking-widest m-0">
                        Budget_Estimate
                      </Text>
                      <Text className="text-[#059669] text-[16px] font-bold m-0">
                        {currencySymbol}
                        {budget}{" "}
                        <span className="text-[#515760] text-[12px] font-semibold ">
                          ({currency})
                        </span>
                      </Text>
                    </td>
                  </tr>
                </table>
              </Section>

              {/* Message Section*/}
              <Section className="mb-10">
                <Text className="text-[#515760] font-mono text-[10px] font-semibold uppercase tracking-widest mb-3">
                  Execution_Plan
                </Text>
                <Section className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-6">
                  <Text className="text-[#334155] text-[15px] leading-[1.6] m-0 font-mono font-semibold">
                    <span className="text-[#0891b2] mr-2 opacity-50">&gt;</span>
                    {message}
                  </Text>
                </Section>
              </Section>

              {/* Reply Button - it doesn't take tailwind styling for link and all so inline styling for that!*/} 
              <Section className="text-center pt-2">
                <Link
                  href={`mailto:${email}`}
                  style={{
                    backgroundColor: "#0f172a",
                    borderRadius: "12px",
                    color: "#ffffff",
                    fontSize: "14px",
                    fontWeight: "bold",
                    textDecoration: "none",
                    textAlign: "center",
                    display: "inline-block",
                    padding: "20px 40px",
                    lineHeight: "100%",
                  }}
                >
                  INITIALIZE_RESPONSE()
                </Link>
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
