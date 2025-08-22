const LinkedInURL = import.meta.env.VITE_LINKEDINURL
const email = import.meta.env.VITE_EMAIL
const phone = import.meta.env.VITE_PHONE

export function Header() {

  return (
    <>
      <div className="text-center fs-5 text-white">
        <h1>Sai Tarra</h1>
        <div className="d-flex justify-content-center gap-3 fst-italic">
        <a className="text-decoration-none" href={LinkedInURL}>LinkedIn</a>
        <a className="text-decoration-none" href={`mailto:${email}`}>{email}</a>
        <a className="text-decoration-none" href={`tel:+1${phone.replace("()-+", "")}`}>{phone}</a>
      </div>
      </div>

    </>
  )
}