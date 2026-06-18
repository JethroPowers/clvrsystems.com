import { InView } from "@/components/ui/in-view"
import { TextRevealByWord } from "@/components/ui/text-reveal"

export default function Thesis() {
  return (
    <section id="thesis" className="w-full py-32 md:py-36">
      <div className="container px-4 md:px-6">
        <InView
          className="mx-auto max-w-xl text-center"
          variants={{
            hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ once: true, margin: "0px 0px -120px 0px" }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
        >
          <p className="section-label">Thesis</p>
          <p className="mt-5 text-sm leading-7 text-black/54">
            We sit between consulting firm, infrastructure studio, and venture platform because those
            functions reinforce each other when they are built on the same operating signal.
          </p>
        </InView>
      </div>

      <TextRevealByWord
        text="Future companies will run on stronger operational infrastructure."
        className="mt-14 md:mt-16"
        stickyClassName="top-20 md:top-24"
        textClassName="max-w-[44rem] text-[1.9rem] leading-[1.05] md:text-[2.65rem] xl:text-[3.35rem]"
      />

      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-[56rem] border-t border-black/10 pt-12 md:pt-14">
          <div className="grid gap-7 md:grid-cols-2 md:gap-8 lg:gap-10">
            <InView
              className="max-w-2xl"
              variants={{
                hidden: { opacity: 0, y: 24, filter: "blur(5px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              viewOptions={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <p className="text-[0.96rem] leading-6 text-black/60 md:text-[1.02rem]">
                We work where operational complexity becomes an infrastructure problem. As AI operations,
                workflow design, and verification become more central to how companies execute, the
                underlying systems layer becomes more strategic.
              </p>
            </InView>

            <InView
              className="max-w-2xl"
              variants={{
                hidden: { opacity: 0, y: 24, filter: "blur(5px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              viewOptions={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.4, delay: 0.08, ease: "easeInOut" }}
            >
              <p className="text-[0.96rem] leading-6 text-black/60 md:text-[1.02rem]">
                Direct work with companies exposes recurring breakdowns and recurring opportunities. The
                best of those patterns become reusable infrastructure, and the strongest infrastructure
                becomes the basis for scalable ventures.
              </p>
            </InView>
          </div>
        </div>
      </div>
    </section>
  )
}
