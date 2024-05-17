/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, FamilySection as PrismaFamilySection } from "@prisma/client";

export class FamilySectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.FamilySectionCountArgs, "select">
  ): Promise<number> {
    return this.prisma.familySection.count(args);
  }

  async familySections<T extends Prisma.FamilySectionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FamilySectionFindManyArgs>
  ): Promise<PrismaFamilySection[]> {
    return this.prisma.familySection.findMany<Prisma.FamilySectionFindManyArgs>(
      args
    );
  }
  async familySection<T extends Prisma.FamilySectionFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.FamilySectionFindUniqueArgs>
  ): Promise<PrismaFamilySection | null> {
    return this.prisma.familySection.findUnique(args);
  }
  async createFamilySection<T extends Prisma.FamilySectionCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FamilySectionCreateArgs>
  ): Promise<PrismaFamilySection> {
    return this.prisma.familySection.create<T>(args);
  }
  async updateFamilySection<T extends Prisma.FamilySectionUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FamilySectionUpdateArgs>
  ): Promise<PrismaFamilySection> {
    return this.prisma.familySection.update<T>(args);
  }
  async deleteFamilySection<T extends Prisma.FamilySectionDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.FamilySectionDeleteArgs>
  ): Promise<PrismaFamilySection> {
    return this.prisma.familySection.delete(args);
  }
}
