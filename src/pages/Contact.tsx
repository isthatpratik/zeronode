
import { useState } from "react";
import { useForm } from "react-hook-form";
import FadeInSection from "@/components/FadeInSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  company: string;
  topic: string;
  message: string;
}

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", data);
      setIsSubmitting(false);
      toast({
        title: "Message sent",
        description: "Thank you for contacting NeuralArc. We'll get back to you shortly.",
      });
      reset();
    }, 1500);
  };
  
  return (
    <main className="pt-24 pb-16">
      <div className="grid-container">
        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mb-12 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Contact NeuralArc</h1>
          <p className="text-xl mt-4 max-w-2xl mx-auto">
            Have a question or want a personalized demo? Get in touch with our team.
          </p>
        </FadeInSection>
        
        <div className="col-span-4 md:col-span-8 lg:col-span-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <FadeInSection delay={100} className="lg:col-span-1">
            <Card className="bg-charcoal/30 border-white/10 h-full">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      {...register("name", { required: "Name is required" })}
                      className="bg-charcoal/50 border-white/20"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Business Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@company.com"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                      className="bg-charcoal/50 border-white/20"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">{errors.email.message}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      placeholder="Your company name"
                      {...register("company", { required: "Company name is required" })}
                      className="bg-charcoal/50 border-white/20"
                    />
                    {errors.company && (
                      <p className="text-red-500 text-sm">{errors.company.message}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="topic">Topic</Label>
                    <Select>
                      <SelectTrigger className="bg-charcoal/50 border-white/20">
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="demo">Request a demo</SelectItem>
                        <SelectItem value="pricing">Pricing information</SelectItem>
                        <SelectItem value="technical">Technical questions</SelectItem>
                        <SelectItem value="partnership">Partnership opportunities</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you?"
                      rows={5}
                      {...register("message", { required: "Message is required" })}
                      className="bg-charcoal/50 border-white/20 resize-none"
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm">{errors.message.message}</p>
                    )}
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-teal text-charcoal hover:bg-teal/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </FadeInSection>
          
          <FadeInSection delay={200} className="lg:col-span-1">
            <Card className="bg-charcoal/30 border-white/10 h-full">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-teal font-semibold mb-2">Email</h3>
                    <p className="text-offwhite">hello@neuralarc.ai</p>
                  </div>
                  
                  <div>
                    <h3 className="text-teal font-semibold mb-2">Phone</h3>
                    <p className="text-offwhite">+1-415-555-0198</p>
                  </div>
                  
                  <div>
                    <h3 className="text-teal font-semibold mb-2">Headquarters</h3>
                    <address className="not-italic">
                      <p>1234 Innovation Way</p>
                      <p>Suite 500</p>
                      <p>San Francisco, CA 94103</p>
                      <p>United States</p>
                    </address>
                  </div>
                  
                  <div>
                    <h3 className="text-teal font-semibold mb-4">Connect With Us</h3>
                    <div className="flex space-x-4">
                      <a href="#" className="text-muted-foreground hover:text-teal transition duration-200">LinkedIn</a>
                      <a href="#" className="text-muted-foreground hover:text-teal transition duration-200">Twitter</a>
                      <a href="#" className="text-muted-foreground hover:text-teal transition duration-200">YouTube</a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-white/10">
                  <h3 className="text-xl font-semibold mb-4">Schedule a Personalized Demo</h3>
                  <p className="mb-6">
                    See how NeuralArc's platforms can transform your competitive intelligence and decision-making processes.
                  </p>
                  <Button className="w-full bg-teal text-charcoal hover:bg-teal/90">
                    Book a Demo Session
                  </Button>
                </div>
              </CardContent>
            </Card>
          </FadeInSection>
        </div>
      </div>
    </main>
  );
};

export default Contact;
