function Footer() {
    return (
      <footer className="bg-dark text-white py-3 mt-auto">
        <div className="container text-center">
          <div className="d-flex justify-content-center">
          <a href="https://github.com/Ubs91" className="mx-3 text-white" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github fa-2x"></i>
              </a>
            <a href="https://www.linkedin.com/in/luis-ubidia-15142582/" className="mx-3 text-white" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="https://stackoverflow.com/users/28405488/andr%c3%a9s-ubidia" className="mx-3 text-white" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-stack-overflow fa-2x"></i>
            </a>
          </div>
          <p className="mt-2">© 2025 Luis Ubidia</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;