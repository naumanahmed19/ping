import { ChevronDown, Expand, List } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from '@/components/ui/button';
import { Separator } from './ui/separator';
interface PostsFilterProps {
  toggleView: () => void;
  isGridView: boolean;
}

const PostsFilter: React.FC<PostsFilterProps> = ({ toggleView, isGridView }) => {

  
  return (
    <>
      <div className='flex items-center justify-between'>
    <div className="flex items-center justify-start gap-2">
    <Select >
      <SelectTrigger className="w-[80px] h-[32px] border-none transition-colors focus-visible:outline-none">
        <SelectValue placeholder="Hot" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sort by</SelectLabel>
          <SelectItem value="best">Best</SelectItem>
      <SelectItem value="hot">Hot</SelectItem>
      <SelectItem value="new">New</SelectItem>
      <SelectItem value="top">Top</SelectItem>

      <SelectItem value="rising">Rising</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>

    <Select >
      <SelectTrigger className="w-[130px] h-[32px] border-none transition-colors focus-visible:outline-none">
        <SelectValue placeholder="Everywhere" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
        <SelectLabel>Select Country</SelectLabel>
            <SelectItem value="USA">United States</SelectItem>
            <SelectItem value="CAN">Canada</SelectItem>
            <SelectItem value="UK">United Kingdom</SelectItem>
            <SelectItem value="AUS">Australia</SelectItem>
            <SelectItem value="GER">Germany</SelectItem>
            <SelectItem value="FRA">France</SelectItem>
            <SelectItem value="JPN">Japan</SelectItem>
            <SelectItem value="BRA">Brazil</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>



  
    </div>
    <Button
        size="icon"
        variant="ghost"
        className='w-[32px] h-[32px]'
        onClick={toggleView}
      >
        {isGridView ? <List size="16" /> : <Expand size="16" />}
      </Button>
   
    </div>
    <Separator className="my-2" />
    </>
  )

   
}

export default PostsFilter;