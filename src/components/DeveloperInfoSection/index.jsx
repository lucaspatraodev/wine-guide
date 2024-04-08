import profileImage from "/DeveloperInfoSection/profile.png";

function DeveloperInfoSection() {
  return (
    <section className="p-4 my-4 md:py-24 md:px-12 flex flex-col md:flex-row gap-4 justify-center items-center">
      <div className="w-full md:w-2/6 flex flex-col gap-4">
        <h1 className="text-[#14213D] text-4xl md:text-5xl text-center md:text-left font-bold">
          Hello there, i'm Lucas!
        </h1>
        <h1 className="text-[#14213D] text-center font-light md:text-left text-xs min-[600px]:text-[16px] leading-5">
          As a passionate Front-end Developer, I specialize in crafting engaging
          digital experiences and efficient code. With 3 years of experience in
          Information Technology, I possess strong expertise in React,
          JavaScript, TailwindCSS, HTML, and CSS, backed by recognized
          certifications. I prioritize clear communication and teamwork,
          constantly seeking new challenges to apply my skills. Let's connect
          and explore how I can help meet demands, drive projects, and empower
          teams.
        </h1>
        <div className="flex gap-4 mt-4 justify-center md:items-left">
          <a
            href="https://www.linkedin.com/in/lucas-patrao/"
            className="text-[#14213D] hover:text-[#FCA311] "
          >
            <span className="inline-block h-8 w-6 md:h-10 md:w-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
              </svg>
            </span>
          </a>
          <a href="#" className="text-[#14213D] hover:text-[#FCA311]">
            <svg
              className="h-8 w-6 md:h-10 md:w-8"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" />
            </svg>
            <span className="sr-only">GitHub account</span>
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={profileImage}
          alt="Profile picture of Lucas Patrão"
          className="w-96 h-96 max-[600px]:h-56 max-[600px]:w-56 rounded-full"
        />
      </div>
    </section>
  );
}

export default DeveloperInfoSection;
