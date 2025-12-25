import css from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <p>© {new Date().getFullYear()} NoteHub. All rights reserved.</p>
        <div className={css.wrap}>
          <p>Developer: Ocheretko Oleh</p>
          <p>
            Contact us:
            <a
              href="www.linkedin.com/in/ocheretko-oleh"
              target="blank"
              rel="noopener noreferrer"
            >
              student@notehub.app
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
