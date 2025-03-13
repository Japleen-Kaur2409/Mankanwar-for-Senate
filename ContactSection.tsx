
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MailIcon, CalendarIcon, InstagramIcon, LinkedinIcon } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-ubc-blue mb-6">
            Get Involved
          </h2>
          <p className="text-xl text-ubc-grey max-w-3xl mx-auto">
            Share your ideas, join the campaign, or learn more about my platform
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="border-ubc-blue/20 shadow-lg">
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-ubc-blue">Share Your Ideas</CardTitle>
              <CardDescription>
                What issues would you like to see addressed in the Senate?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-ubc-grey">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-ubc-grey">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-ubc-grey">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Message subject" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-ubc-grey">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Share your thoughts, concerns or suggestions"
                    rows={4}
                  />
                </div>
                <Button className="w-full bg-ubc-blue hover:bg-ubc-lightblue">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-ubc-blue/20 shadow-lg">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-ubc-blue">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-ubc-blue/10 p-3 rounded-full">
                    <MailIcon className="h-6 w-6 text-ubc-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Email</h3>
                    <p className="text-ubc-grey text-sm">
                      mankanwar4senate@gmail.com
                      <br />
                      I typically respond within 24 hours.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-ubc-blue/10 p-3 rounded-full">
                    <InstagramIcon className="h-6 w-6 text-ubc-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Instagram</h3>
                    <p className="text-ubc-grey text-sm mb-2">
                      Follow my campaign journey and get updates
                    </p>
                    <a 
                      href="https://www.instagram.com/mankanwar4senate/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-ubc-lightblue hover:underline"
                    >
                      @mankanwar4senate
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-ubc-blue/10 p-3 rounded-full">
                    <CalendarIcon className="h-6 w-6 text-ubc-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Campaign Events</h3>
                    <p className="text-ubc-grey text-sm">
                      Meet me in person at one of our upcoming events across campus.
                      Check Instagram for dates and locations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button 
              variant="outline" 
              className="w-full border-ubc-blue text-ubc-blue hover:bg-ubc-blue/10"
              onClick={() => window.open('https://www.instagram.com/mankanwar4senate/', '_blank')}
            >
              Follow Campaign Updates
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
