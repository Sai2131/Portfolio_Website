const LINKEDINURL = "https://www.linkedin.com/in/sai-tarra-9563a9238/"
const EMAIL  = "sai2131@icloud.com"
const PHONE = "(469)-428-3133"

export function Header() {

  return (
    <>
      <div className="text-center fs-5">
        <h1 className="mt-3 text-white">Sai Tarra</h1>
        <div className="d-flex justify-content-center gap-3 fst-italic">
        <a className="text-decoration-none" href={LINKEDINURL}>LinkedIn</a>
        <a className="text-decoration-none" href={`mailto:${EMAIL}`}>{EMAIL}</a>
        <a className="text-decoration-none" href={`tel:+1${PHONE.replace("()-+", "")}`}>{PHONE}</a>
      </div>
      </div>

    </>
  )
}