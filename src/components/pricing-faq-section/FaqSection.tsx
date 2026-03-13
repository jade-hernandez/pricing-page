import Button from "../ui/Button";
import Link from "../ui/Link";
import FaqItem from "./FaqItem";
import faqContentData from "./faq-data";

export default function FaqSection() {
  return (
    <section className='mx-auto flex h-fit max-w-304 flex-col gap-12 px-3 py-12 md:gap-16 md:px-4 md:py-16 lg:py-24'>
      <div className='flex flex-col items-center gap-5 text-center'>
        <h1 className='text-3xl font-semibold text-neutral-900 md:text-5xl'>
          Frequently&nbsp;asked questions
        </h1>
        <span className='block text-lg text-neutral-600 md:text-xl lg:hidden'>
          Get all your questions answered
        </span>
        <span className='hidden text-lg text-neutral-600 md:text-xl lg:block'>
          Choose any questions you need
        </span>
      </div>

      <div className='faq-parent-container'>
        <div className='faq-content-container'>
          {faqContentData.map((faqItem, index) => (
            <FaqItem
              key={`faq-item-${faqItem.position}`}
              position={faqItem.position}
              title={faqItem.title}
              content={faqItem.content}
              isLast={index === faqContentData.length - 1}
            />
          ))}
        </div>

        <div className='mt-7 flex h-fit w-full flex-col items-center justify-between gap-4 rounded-lg border border-neutral-200 bg-white p-4 shadow-[0_4px_6px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.06)] md:flex-row md:p-8'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-xl font-semibold text-pretty text-neutral-900'>
              Can&apos;t find the answer you&apos;re looking for?
            </h2>
            <p className='w-full text-start text-wrap md:flex-row'>
              <span className='text-base font-normal text-neutral-600'>Reach out to&nbsp;our </span>
              <Link
                href='mailto:support@mail.com'
                variant='linkColor'
                size='md-link'
                className='inline'
              >
                customer&nbsp;support
              </Link>{" "}
              team.
            </p>
          </div>
          <Button
            variant='primary'
            size='lg'
            className='flex w-full items-center justify-center md:max-w-34.5'
          >
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  );
}
