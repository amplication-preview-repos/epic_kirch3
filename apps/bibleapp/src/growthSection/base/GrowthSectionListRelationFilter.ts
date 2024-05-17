/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { GrowthSectionWhereInput } from "./GrowthSectionWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class GrowthSectionListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => GrowthSectionWhereInput,
  })
  @ValidateNested()
  @Type(() => GrowthSectionWhereInput)
  @IsOptional()
  @Field(() => GrowthSectionWhereInput, {
    nullable: true,
  })
  every?: GrowthSectionWhereInput;

  @ApiProperty({
    required: false,
    type: () => GrowthSectionWhereInput,
  })
  @ValidateNested()
  @Type(() => GrowthSectionWhereInput)
  @IsOptional()
  @Field(() => GrowthSectionWhereInput, {
    nullable: true,
  })
  some?: GrowthSectionWhereInput;

  @ApiProperty({
    required: false,
    type: () => GrowthSectionWhereInput,
  })
  @ValidateNested()
  @Type(() => GrowthSectionWhereInput)
  @IsOptional()
  @Field(() => GrowthSectionWhereInput, {
    nullable: true,
  })
  none?: GrowthSectionWhereInput;
}
export { GrowthSectionListRelationFilter as GrowthSectionListRelationFilter };
