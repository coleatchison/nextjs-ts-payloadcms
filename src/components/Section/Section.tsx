export default function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className="mt-12 mb-24 px-8 flex justify-center w-full mx-auto">
      <div className="max-w-7xl w-full">{children}</div>
    </section>
  )
}
