'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import clsx from 'clsx';
import styles from './FAQAccordion.module.css';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className={clsx(styles.faqItem, isOpen && styles.faqItemOpen)}>
            <button
              className={styles.faqButton}
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
              id={`faq-question-${index}`}
              type="button"
            >
              <span className={styles.faqQuestion}>{item.question}</span>
              <span className={styles.faqIcon}>
                {isOpen ? (
                  <Minus size={20} aria-hidden="true" />
                ) : (
                  <Plus size={20} aria-hidden="true" />
                )}
              </span>
            </button>
            <div
              id={`faq-answer-${index}`}
              className={styles.faqAnswer}
              role="region"
              aria-labelledby={`faq-question-${index}`}
              aria-hidden={!isOpen}
            >
              <p className={styles.faqAnswerText}>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
