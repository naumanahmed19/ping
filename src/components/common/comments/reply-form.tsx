import React from 'react';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
  } from "@/components/ui/card";// Assuming these are imported from somewhere
  import { Textarea } from "@/components/ui/textarea";// Assuming Textarea is imported from somewhere
import { Button } from '@/components/ui/button';

const ReplyForm = ({ showReplyForm , onCancel })  => {
   

    const handleSubmit = () => {
        // Handle the submit action
       alert('Comment submitted');
    };


    return (
    showReplyForm && (
        <div className="mt-2">
        <Card>
            <CardContent className="p-0 text-sm">
                <Textarea
                    id="comment"
                    rows={1}
                    className="my-0 border-none"
                    placeholder="Write your reply"
                    autoFocus
                />
            </CardContent>
            <CardFooter className="flex items-center justify-space-evenly border-t bg-muted/50 px-3 py-2">
            
                <div className="mr-2">
                    <Button type="button" size="sm" className="h-[28px]" onClick={onCancel}>
                        Cancel
                    </Button>
                </div>
                <div className="mr-0 w-auto">
                    <Button type="submit" size="sm" className="h-[28px]" onClick={handleSubmit}>
                        Comment
                    </Button>
                </div>
            </CardFooter>
        </Card>
    </div>
    )
    );
};

export default ReplyForm;