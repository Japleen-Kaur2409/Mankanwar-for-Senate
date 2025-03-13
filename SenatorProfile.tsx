
import { TextRevealCard } from "./ui/aceternity/text-reveal";
import { MovingBorder } from "./ui/aceternity/moving-border";
import { cn } from "@/lib/utils";

const SenatorProfile = () => {
  return (
    <section id="senator" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-ubc-blue mb-6">
            Meet Your Candidate
          </h2>
          <p className="text-xl text-ubc-grey max-w-3xl mx-auto">
            Passionate, dedicated, and ready to represent Science students at UBC
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <MovingBorder
              containerClassName="rounded-lg overflow-hidden"
              className="p-1 rounded-lg flex items-center justify-center"
              duration={3000}
              as="div"
            >
              <div className="rounded-lg h-[450px] w-full max-w-[350px] overflow-hidden">
                <img 
                  src="https://storage.googleapis.com/ubyssey/media/renditions/Mankanwar_Singh.width-1500.format-webp.webp" 
                  alt="Mankanwar Singh" 
                  className="h-full w-full object-cover"
                />
              </div>
            </MovingBorder>
          </div>

          <div className="space-y-6">
            <TextRevealCard
              text="Science Student"
              revealText="Science Student"
              className="w-full"
            >
              <p className="text-ubc-grey">
                Fourth-year Biology major with a passion for improving the student experience
                at UBC. Actively involved in various campus communities and initiatives.
              </p>
            </TextRevealCard>

            <TextRevealCard
              text="Leadership Experience"
              revealText="Leadership Experience"
              className="w-full"
            >
              <p className="text-ubc-grey">
                Executive member of the Science Undergraduate Society, Residence Advisor,
                and dedicated volunteer with various campus and community organizations.
                Experienced in making policy changes and advocating for student needs.
              </p>
            </TextRevealCard>

            <TextRevealCard
              text="Vision & Values"
              revealText="Vision & Values"
              className="w-full"
            >
              <p className="text-ubc-grey">
                Committed to affordability, inclusivity, and student wellbeing. 
                I believe in transparency and will work tirelessly to ensure that 
                student voices are heard and valued in Senate decisions that affect 
                our academic experiences.
              </p>
            </TextRevealCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SenatorProfile;
