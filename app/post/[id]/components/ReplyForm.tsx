import React from 'react';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
  } from "@/components/ui/card";// Assuming these are imported from somewhere
  import { Textarea } from "@/components/ui/textarea";// Assuming Textarea is imported from somewhere

const ReplyForm = ({ showReplyForm }) => (
  showReplyForm && (
    <div className="mt-2">
      <Card>
        <CardContent className="p-0 text-sm">
          <Textarea
            id="comment"
            className="my-0 border-none"
            placeholder="Write your reply"
          />
        </CardContent>
        <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-3 py-2">
          <div className="text-xs text-muted-foreground">
            {/* Additional content here */}
          </div>
        </CardFooter>
      </Card>
    </div>
  )
);

export default ReplyForm;