import React from "react";
import Card1 from "../cards/Card1";

const Section4 = ({ data }) => {


    return (
        <div className="mt-8 container mx-auto px-4 py-8 max-w-[1200px] ">
            <div className=" w-full max-w-6xl">
                {/* Left Section - Services */}
                <div>
                    <h2 className="heading--xl  mb-6">{data?.title}</h2>
                    <p className="mb-8">{data?.subtitle}</p>
                </div>
            </div>



          
                <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {data?.items?.map((study, index) => (
                    <Card1
                        id={study.id}
                        redirectLink={study.redirectLink}
                        key={index}
                        title={study.heroSection?.title}
                        description={study.heroSection?.description}
                        image={study.heroSection?.image}
                        category={study.heroSection?.title}
                    />
                ))}

            </div>
        </div>

    );
};

export default Section4;
