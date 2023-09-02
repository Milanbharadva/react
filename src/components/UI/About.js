const About = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-2 font-medium text-lg mb-5 text-[#007dbc]">
        <h1>WE SELL PRODUCT.</h1>
        <h1>VISIT OUR OFFLINE STORE</h1>
      </div>
      <div class="embed-responsive embed-responsive-21by9 flex justify-center items-center">
        <iframe
        title="map"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1846.2534419614776!2d70.78406620092875!3d22.25878099837955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDE1JzMxLjYiTiA3MMKwNDcnMDUuMyJF!5e0!3m2!1sen!2sin!4v1689948682744!5m2!1sen!2sin"
          width="1000"
          height="500"
          frameborder="0"
          style={{ Border: "0px" }}
          allowfullscreen=""
          class="embed-responsive-item"
        ></iframe>
      </div>
    </div>
  );
};

export default About;
