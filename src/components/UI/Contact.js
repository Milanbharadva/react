const Contact = () => {
  return (
    <div className="flex flex-col items-center text-lg ">
      <h1>Have any questions?</h1>
      <p className="text-center">
        If you have any question then you can ask that question to us below.
        Please submit your question and fill up below form we will reply you on
        gmail as soon as we can.
      </p>
      <div className="text-center flex justify-center items-center mt-5">
        <form
          method="post"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                name="name"
                className="border-[1px]  sm:w-96 h-11"
                placeholder="NAME"
                style={{ paddingLeft: "20px" }}
              />
              <input
                type="text"
                name="email"
                className="border-[1px]  sm:w-96 h-11"
                placeholder="EMAIL"
                style={{ paddingLeft: "20px" }}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                name="phone"
                className="border-[1px]  sm:w-96 h-11"
                placeholder="PHONE NUMBER"
                style={{ paddingLeft: "20px" }}
              />
              <input
                type="text"
                name="subject"
                className="border-[1px]  sm:w-96 h-11"
                placeholder="SUBJECT"
                style={{ paddingLeft: "20px" }}
              />
            </div>
          </div>
          <textarea
            name="message"
            placeholder="MESSAGE"
            id=""
            // cols="30"
            className="border-[2px] mt-2 w-[50vw]"
            rows="10"
            style={{ paddingLeft: "20px", paddingTop: "15px" }}
          ></textarea>
          <br />
          <input
            type="submit"
            className="border-[1px] cursor-pointer bg-[#007dbc] text-white rounded-lg uppercase  p-3 font-medium text-xl"
            value="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
