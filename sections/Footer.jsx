import React from "react";

function Footer() {
  return (
    <div className="bg-primary rounded-t-3xl pt-20 pb-5">
      <div className="container mx-auto px-2 text-white flex gap-x-10  flex-wrap">
        <ul className="md:w-1/5">
          <li className="mb-6">
            <h4 className="text-lg font-semibold mb-3">Phone</h4>
            <p>+7 499 322 16 67</p>
          </li>
          <li className="mb-6">
            <h4 className="text-lg font-semibold mb-3">Address</h4>
            <p>734 Broadway, Floor 5 New York, NY 10003</p>
          </li>
        </ul>
        <ul className="md:w-1/5">
          <li className="mb-6">
            <h4 className="text-lg font-semibold mb-3">Email</h4>
            <p>hello@estato.com</p>
          </li>
        </ul>
        <div className="md:w-1/2 mb-10">
          <div className="font-bold text-3xl mb-6">Estato</div>
          <p>
            We are a non-profit organization can you make it look more designed
            . This looks perfect. Just Photoshop out the dog, add a baby, and
            make the curtains blue can the black be darker we do not need a
            contract, do we, and give us a complimentary logo along with the
            website.
          </p>
        </div>
      </div>
      <p className="container mx-auto p-2 text-center text-white">
        © Apartb. All Rights Reserved - {new Date().getFullYear()}
      </p>
    </div>
  );
}

export default Footer;
