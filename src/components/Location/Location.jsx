import React from "react";
import "./Location.css";

const Location = () => {
  return (
    <div className="main">
      <h2 className="contact_heading">CONTACT US</h2>
      <div className="contact_main">
        <div className="contact_form box">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, officiis architecto numquam error nesciunt, consequuntur eos, illum obcaecati exercitationem beatae facilis veritatis vel perferendis quae magnam qui corporis natus reprehenderit iusto repellat. Eius dolores, nobis autem qui assumenda pariatur neque quis modi eos, debitis ab ratione harum non quia magnam repellendus quasi! Aliquam at tempora minus excepturi nisi culpa ab fuga labore neque. Aspernatur eius, dolorum, aliquid molestias quam excepturi possimus nulla dolore eum hic cumque in. Cupiditate quibusdam praesentium voluptatum facilis ea ipsam eum voluptates. Quae modi iste possimus corrupti magni totam tempora in, ab vitae aut repellendus. Omnis officia dolores fugit natus repellat rerum commodi et fugiat error beatae, sit id hic praesentium molestias? Recusandae sint quia iusto similique incidunt, accusamus eaque ea ipsa minima libero vitae exercitationem at saepe ab quis ex unde, suscipit doloremque eos! Eaque adipisci officia veritatis enim atque asperiores vitae, ducimus accusamus, nam tenetur libero minima earum ratione deserunt commodi esse sapiente nostrum, a distinctio quaerat maxime! Adipisci expedita enim labore totam veniam ipsa nostrum accusantium, non laborum qui a rem error accusamus consequuntur ea autem? Sequi impedit voluptate ullam? Necessitatibus, quam fuga magnam consequuntur at expedita eum nisi numquam blanditiis earum repellat.</p>
        </div>
        <div class="map-container box">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d893.0950152872672!2d72.82682319292856!3d18.980523015547973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3be7ce677b61becf%3A0xe2c194313c0be737!2sShirin%20Apartment%2C%20593%2C%20K%20K%20Road%2C%20Kasturba%20Quarters%2C%20Jacob%20Circle%2C%20Mumbai%2C%20Maharashtra%20400011!3m2!1d18.9803329!2d72.8275026!5e0!3m2!1sen!2sin!4v1716907322257!5m2!1sen!2sin"
            // width="700"
            // height="650"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Location;
