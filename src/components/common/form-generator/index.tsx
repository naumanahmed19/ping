"use client"; // Mark the component as a client component
import { Form, FormField } from "@/components/ui/form";

import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Field } from "./Field";
import { FormFieldComponent } from "./form-field-component";

export interface FormMessages {
  success: string;
  error: string;
}

interface FormGeneratorProps {
  children?: React.ReactNode;
  fields: Field[];
  onSubmit: (data: any) => void;
  onChange?: (data: any) => void;
  schema: z.ZodType<any>;
  defaultValues?: Record<string, any>;
  className?: string;
  action?: any;
  disabled?: boolean;
  messages?: FormMessages;
}

export function FormGenerator({
  children,
  fields,
  onSubmit,
  onChange,
  schema,
  defaultValues,
  className,
  action,
  disabled,
  messages,
}: FormGeneratorProps) {
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues, // Set default values from form state
  });

  useEffect(() => {
    console.log("Form changed", form.getValues());
    if (onChange) {
      onChange(form.watch());
    }
  }, [form, onChange]);

  const handleSave = async (data: any) => {
    console.log("Data", data);
    try {
      const response: any = await onSubmit(data);
      if (response.success) {
        toast({ title: messages?.success || "Form submitted successfully!" });
        router.refresh();
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: messages?.error || "Uh oh! Something went wrong.",
        description:
          error instanceof Error ? error.message : "An unknown error occurred",
      });
    }
  };

  function onFieldChange(fieldName: string, value: any) {
    console.log("Field changed", fieldName, value);
    form.setValue(fieldName, value);
    form.clearErrors(fieldName);
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSave)} className="space-y-6">
          <div className={cn("flex flex-wrap gap-4", className)}>
            {fields.map((f: Field) => (
              <div
                key={f.name}
                className={cn(`${f.flex ? "flex-1" : "w-full"}`, className)}
              >
                {f.beforeFormField}
                <FormField
                  control={form.control}
                  name={f.name as "name" | "description"}
                  render={({ field }) => (
                    <FormFieldComponent
                      field={field}
                      filedAttributes={f}
                      onChange={onFieldChange}
                    />
                  )}
                />
                {f.afterFormField}
              </div>
            ))}
          </div>
          {children}
        </form>
      </Form>
    </>
  );
}
