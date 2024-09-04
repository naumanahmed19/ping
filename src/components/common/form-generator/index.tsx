import { Form, FormField } from "@/components/ui/form";

import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Field } from "./Field";
import { FormFieldComponent } from "./form-field-component";

interface FormGeneratorProps {
  children?: React.ReactNode;
  fields: Field[];
  onSubmit: (data: any) => void;
  schema: z.ZodType<any>;
  defaultValues?: Record<string, any>;
  className?: string;
}

export function FormGenerator({
  children,
  fields,
  onSubmit,
  schema,
  defaultValues,
  className,
}: FormGeneratorProps) {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues, // Set default values from form state
  });

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className={cn("flex flex-wrap gap-4", className)}>
            {fields.map(
              ({
                name,
                label,
                placeholder,
                type,
                inputType,
                className,
                flex,
              }) => (
                <div
                  key={name}
                  className={cn(`${flex ? "flex-1" : "w-full"}`, className)}
                >
                  <FormField
                    control={form.control}
                    name={name as "name" | "description"}
                    render={({ field }) => (
                      <FormFieldComponent
                        field={field}
                        label={label}
                        placeholder={placeholder}
                        type={type}
                        inputType={inputType}
                      />
                    )}
                  />
                </div>
              ),
            )}
          </div>
          {children}
        </form>
      </Form>
    </>
  );
}
