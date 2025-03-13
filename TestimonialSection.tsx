
import { BackgroundGradient } from "./ui/aceternity/background-gradient";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "Mankanwar has consistently shown dedication to improving the student experience. His ability to listen and take action makes him an ideal Senate candidate.",
      author: "Jane Doe",
      position: "Science Undergraduate Society President"
    },
    {
      quote: "I've worked with Mankanwar on several initiatives, and his passion for student advocacy and academic excellence is unmatched.",
      author: "John Smith",
      position: "Biology Student Association"
    },
    {
      quote: "Mankanwar truly understands the challenges science students face and has concrete plans to address them through Senate policies.",
      author: "Alex Johnson",
      position: "Former Science Senator"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-ubc-blue mb-6">
            What Others Say
          </h2>
          <p className="text-xl text-ubc-grey max-w-3xl mx-auto">
            Hear from students and faculty who support my candidacy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <BackgroundGradient key={index} className="w-full">
              <Card className="border-none bg-white h-full">
                <CardContent className="p-6">
                  <div className="text-5xl text-ubc-gold mb-4">"</div>
                  <p className="text-ubc-grey italic mb-6">
                    {testimonial.quote}
                  </p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-semibold text-ubc-blue">{testimonial.author}</p>
                    <p className="text-sm text-ubc-grey">{testimonial.position}</p>
                  </div>
                </CardContent>
              </Card>
            </BackgroundGradient>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
