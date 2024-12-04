import { TabPanel } from "@/components/common/tabs";
import { P } from "@/components/typography";
import { FC } from "react";

export interface IFAQS {
  id: number;
  question: string;
  answer: string;
}

export const faqs: IFAQS[] = [
  {
    id: 1,
    question: "How do I commission a custom song?",
    answer: "This is the answer of the question",
  },
  {
    id: 2,
    question: "How much does it cost to commission a song?",
    answer: "This is the answer of the question",
  },
  {
    id: 3,
    question: "What happens after I submit my song commission form?",
    answer: "This is the answer of the question",
  },
  {
    id: 4,
    question: "Can I edit or cancel my song commission form after I submit it?",
    answer: "This is the answer of the question",
  },
  {
    id: 5,
    question: "What if my artist doesn’t accept my song commission?",
    answer: "This is the answer of the question",
  },
  {
    id: 6,
    question: "If I live outside the U.S., can I still commission a song?",
    answer: "This is the answer of the question",
  },
  {
    id: 7,
    question: "How will I be involved in the songwriting process?",
    answer: "This is the answer of the question",
  },
  {
    id: 8,
    question: "Can I ask the songwriter to include specific lyrics?",
    answer: "This is the answer of the question",
  },
  {
    id: 9,
    question: "Are any song topics off -limits?",
    answer: "This is the answer of the question",
  },
  {
    id: 10,
    question: "Can I request changes to my song after it’s complete?",
    answer: "This is the answer of the question",
  },
];

export const FAQA: FC<{ activeIndex: number }> = ({ activeIndex }) => {
  return (
    <TabPanel
      className="flex items-center justify-center gap-6"
      isActive={activeIndex === 1}
    >
      {faqs.map(({ id, question, answer }) => (
        <div className="rounded-3xl" key={id}>
          <div>
            <P variant="P1" className="text-[#A1A1A2]">
              {question}
            </P>
            <div className="flex items-center justify-between">
              <P variant="P3" className="text-[#A1A1A2]">
                {answer}
              </P>
            </div>
          </div>
        </div>
      ))}
    </TabPanel>
  );
};
