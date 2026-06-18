import { FeatureWithImageComparison } from '@/components/ui/feature-with-image-comparison'

export default function Application() {
  return (
    <section id="application" className="w-full py-[8.5rem] md:py-40">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-[63rem]">
          <FeatureWithImageComparison
            eyebrow="Application"
            title="Where our infrastructure is used, and how it works best."
            description="Compare the operating context on the left with the wiser implementation pattern on the right. This section is meant to show both fit and discipline in one view."
            beforeImage="/application-fragmented.svg"
            afterImage="/application-structured.svg"
            beforeLabel="Fragmented operations"
            afterLabel="Structured system layer"
            beforeTitle="Operating environments where work still breaks between people, steps, and approvals."
            beforeBody="This is where the work typically begins: revenue, delivery, or client operations with too many dependencies to stay informal."
            beforePoints={[
              'Revenue handoffs and quote-to-cash flows.',
              'Client operations with follow-up and scheduling dependencies.',
              'Approval or verification-heavy delivery workflows.',
              'Environments where proof, ownership, and reporting cannot drift.',
            ]}
            afterTitle="A stronger system layer introduced with constraint, clarity, and measurable ownership."
            afterBody="The wiser implementation pattern is disciplined rather than expansive. One lane is defined properly, made visible, and then widened only once it holds."
            afterPoints={[
              'Start with one constrained workflow, not the whole company.',
              'Define ownership, approval, and proof points first.',
              'Connect visibility and reporting before scaling breadth.',
              'Expand only after one lane becomes stable and repeatable.',
            ]}
            defaultInset={40}
            instruction="Drag the divider or use arrow keys to compare the operating context with the structured implementation state."
            beforeAlt="Abstract mockup showing fragmented operations"
            afterAlt="Abstract mockup showing a fully structured green operating state"
          />
        </div>
      </div>
    </section>
  )
}
