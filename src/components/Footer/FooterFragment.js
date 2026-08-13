import "./footer-fragment.css";

export function FooterFragment ({ title, children }) {
  return (
    <div className="footer-fragment">
        {title && <div className="footer-fragment__title">{title}</div>}
        <div className="footer-fragment__content">
        {children}
        </div>
    </div>
  );
}
