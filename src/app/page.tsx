"use client";

import TermsAndCondsModal from "@components/TermsAndCondsModal";
import { useDisclosure } from "@mantine/hooks";
import { runningPlans } from "@lib/runningPlans";
import {
  Anchor,
  Button,
  Checkbox,
  Container,
  Group,
  Radio,
  Select,
  Space,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { z } from "zod";
//create Zod schema for validation
const schema = z.object({
  firstName: z.string().min(3,{message:'First Name must have at least 3 characters'}),
  lastName: z.string().min(3,{message:'Last Name must have at least 3 characters'}),
  email: z.string().email({message:'Invalid email address'}),
  plan: z.enum(["funrun","mini","half","full"],{message: 'Plaese select Plan'}),
  gender: z.enum(["male","female"],{message: 'Plaese select a gender'}),
  acceptTermsAndConds: z.literal(true,{
  errorMap: () => ({message: 'You must accept the terms and conditions'})
  })
});
export default function Home() {
  const [opened, { open, close }] = useDisclosure(false);
  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      plan: null,
      gender: null,
      acceptTermsAndConds: false,
    },
    validate: zodResolver(schema)
  });

  console.log(form.values);

  return (
    <div>
      <Container size="500px">
        <Space h="lg" />
        <Title fs="italic" ta="center">
          Register CMU Marathon 🥈
        </Title>
        <Space h="lg" />

        <form onSubmit={form.onSubmit(()=>alert("See you bitch"))}>
          <Stack gap="sm">
            <Group grow align="start">
              <TextInput label="First Name" {...form.getInputProps('firstName')}/>
              <TextInput label="Last Name" {...form.getInputProps('lastName')}/>
            </Group>
            <TextInput label="Email" {...form.getInputProps('email')}/>
            <Select
              label="Plan"
              data={runningPlans}
              placeholder="Please select plan..."
              {...form.getInputProps('plan')}
            />
            <Space />
            <Radio.Group label="Gender" {...form.getInputProps('gender')}>
              <Radio value="male" label="Male 👨" mb="xs" />
              <Radio value="female" label="Female 👧" />
            </Radio.Group>
            <Space />
            <Checkbox {...form.getInputProps('acceptTermsAndConds')}
              label={
                <Text>
                  I accept{" "}
                  <Anchor onClick={open} href="#">
                    terms and conditions
                  </Anchor>
                </Text>
              }
            />
            <Button type="submit">Register</Button>
          </Stack>
        </form>
      </Container>

      <TermsAndCondsModal opened={opened} close={close} />
    </div>
  );
}
