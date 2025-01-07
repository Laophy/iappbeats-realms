import React, { useState } from "react";
import {
  Container,
  Box,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  useColorModeValue,
  Badge,
  HStack,
  Icon,
  List,
  ListItem,
  ListIcon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Divider,
  Stack,
  InputGroup,
  InputLeftElement,
  Radio,
  RadioGroup,
  Image,
  Spinner,
} from "@chakra-ui/react";
import {
  FiUpload,
  FiSave,
  FiCheck,
  FiCpu,
  FiHardDrive,
  FiUsers,
  FiCreditCard,
  FiCalendar,
  FiLock,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { chakra } from "@chakra-ui/react";

// Create a motion-enabled Box
const MotionBox = chakra(motion.div);

const serverPackages = [
  {
    name: "Starter",
    price: "$9.99/month",
    features: [
      "2GB RAM",
      "10GB Storage",
      "Up to 50 Players",
      "Basic Support",
      "99.9% Uptime",
      "Daily Backups",
    ],
    cpu: "2 vCPU",
    storage: "10GB SSD",
    players: "50",
    recommended: false,
    color: "blue",
  },
  {
    name: "Professional",
    price: "$24.99/month",
    features: [
      "4GB RAM",
      "25GB Storage",
      "Up to 200 Players",
      "Priority Support",
      "99.9% Uptime",
      "Hourly Backups",
      "DDoS Protection",
      "Custom Domain",
    ],
    cpu: "4 vCPU",
    storage: "25GB SSD",
    players: "200",
    recommended: true,
    color: "purple",
  },
  {
    name: "Enterprise",
    price: "$49.99/month",
    features: [
      "8GB RAM",
      "50GB Storage",
      "Unlimited Players",
      "24/7 Support",
      "99.99% Uptime",
      "Real-time Backups",
      "DDoS Protection",
      "Custom Domain",
      "Dedicated IP",
    ],
    cpu: "8 vCPU",
    storage: "50GB SSD",
    players: "∞",
    recommended: false,
    color: "green",
  },
];

const PaymentModal = ({
  isOpen,
  onClose,
  selectedPackage,
  onPaymentSuccess,
}) => {
  const [paymentStep, setPaymentStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("credit");

  const handlePayment = () => {
    setPaymentStep(2);
    // Simulate payment processing
    setTimeout(() => {
      setPaymentStep(3);
    }, 2000);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <HStack justify="space-between">
            <Text>{selectedPackage?.name} Package</Text>
            <Badge colorScheme={selectedPackage?.color}>
              {selectedPackage?.price}
            </Badge>
          </HStack>
        </ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          {paymentStep === 1 && (
            <VStack spacing={6} align="stretch">
              <Box>
                <Text fontWeight="bold" mb={4}>
                  Package Details
                </Text>
                <SimpleGrid columns={2} spacing={4}>
                  <HStack>
                    <Icon as={FiCpu} color={`${selectedPackage?.color}.500`} />
                    <Text>{selectedPackage?.cpu}</Text>
                  </HStack>
                  <HStack>
                    <Icon
                      as={FiHardDrive}
                      color={`${selectedPackage?.color}.500`}
                    />
                    <Text>{selectedPackage?.storage}</Text>
                  </HStack>
                  <HStack>
                    <Icon
                      as={FiUsers}
                      color={`${selectedPackage?.color}.500`}
                    />
                    <Text>{selectedPackage?.players} Players</Text>
                  </HStack>
                </SimpleGrid>
              </Box>

              <Divider />

              <Box>
                <Text fontWeight="bold" mb={4}>
                  Payment Method
                </Text>
                <RadioGroup value={paymentMethod} onChange={setPaymentMethod}>
                  <Stack spacing={4}>
                    <Radio value="credit">
                      <HStack>
                        <Image
                          src="https://i.imgur.com/Qk4y42l.png"
                          h="20px"
                          alt="Credit Cards"
                        />
                        <Text>Credit Card</Text>
                      </HStack>
                    </Radio>
                    <Radio value="paypal">
                      <HStack>
                        <Image
                          src="https://i.imgur.com/W7zjYYD.png"
                          h="20px"
                          alt="PayPal"
                        />
                        <Text>PayPal</Text>
                      </HStack>
                    </Radio>
                  </Stack>
                </RadioGroup>
              </Box>

              {paymentMethod === "credit" && (
                <VStack spacing={4}>
                  <FormControl>
                    <FormLabel>Card Number</FormLabel>
                    <InputGroup>
                      <InputLeftElement>
                        <FiCreditCard />
                      </InputLeftElement>
                      <Input placeholder="1234 5678 9012 3456" />
                    </InputGroup>
                  </FormControl>

                  <HStack>
                    <FormControl>
                      <FormLabel>Expiry</FormLabel>
                      <InputGroup>
                        <InputLeftElement>
                          <FiCalendar />
                        </InputLeftElement>
                        <Input placeholder="MM/YY" />
                      </InputGroup>
                    </FormControl>
                    <FormControl>
                      <FormLabel>CVV</FormLabel>
                      <InputGroup>
                        <InputLeftElement>
                          <FiLock />
                        </InputLeftElement>
                        <Input
                          placeholder="123"
                          type="password"
                          maxLength={3}
                        />
                      </InputGroup>
                    </FormControl>
                  </HStack>
                </VStack>
              )}
            </VStack>
          )}

          {paymentStep === 2 && (
            <VStack py={8} spacing={4}>
              <Spinner size="xl" color={`${selectedPackage?.color}.500`} />
              <Text>Processing your payment...</Text>
            </VStack>
          )}

          {paymentStep === 3 && (
            <VStack py={8} spacing={4}>
              <Icon as={FiCheck} boxSize={12} color="green.500" />
              <Heading size="md">Payment Successful!</Heading>
              <Text align="center">
                Your server will be ready in a few minutes. You can continue
                with the setup below.
              </Text>
            </VStack>
          )}
        </ModalBody>

        <ModalFooter>
          {paymentStep === 1 && (
            <Button
              colorScheme={selectedPackage?.color}
              onClick={handlePayment}
              leftIcon={<FiLock />}
            >
              Pay {selectedPackage?.price}
            </Button>
          )}
          {paymentStep === 3 && (
            <Button
              colorScheme={selectedPackage?.color}
              onClick={onPaymentSuccess}
            >
              Continue Setup
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const PackageCard = ({ pkg, onSelect, index }) => {
  const bg = useColorModeValue("white", "gray.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.2, // Stagger the animations
        ease: "easeOut",
      }}
    >
      <Box
        bg={bg}
        p={6}
        borderRadius="lg"
        border="1px"
        borderColor={borderColor}
        position="relative"
        transition="all 0.2s"
        _hover={{
          transform: "translateY(-4px)",
          shadow: "xl",
        }}
      >
        {pkg.recommended && (
          <Badge
            colorScheme={pkg.color}
            position="absolute"
            top={-3}
            right={-3}
            px={3}
            py={1}
            borderRadius="full"
            boxShadow="lg"
          >
            Recommended
          </Badge>
        )}

        <VStack spacing={4} align="stretch">
          <Heading size="md" color={`${pkg.color}.500`}>
            {pkg.name}
          </Heading>
          <Text fontSize="2xl" fontWeight="bold">
            {pkg.price}
          </Text>

          <HStack spacing={4} py={2}>
            <VStack align="center" flex={1}>
              <Icon as={FiCpu} boxSize={6} color={`${pkg.color}.500`} />
              <Text fontSize="sm" fontWeight="medium">
                {pkg.cpu}
              </Text>
            </VStack>
            <VStack align="center" flex={1}>
              <Icon as={FiHardDrive} boxSize={6} color={`${pkg.color}.500`} />
              <Text fontSize="sm" fontWeight="medium">
                {pkg.storage}
              </Text>
            </VStack>
            <VStack align="center" flex={1}>
              <Icon as={FiUsers} boxSize={6} color={`${pkg.color}.500`} />
              <Text fontSize="sm" fontWeight="medium">
                {pkg.players}
              </Text>
            </VStack>
          </HStack>

          <List spacing={2}>
            {pkg.features.map((feature, index) => (
              <ListItem key={index} fontSize="sm">
                <ListIcon as={FiCheck} color={`${pkg.color}.500`} />
                {feature}
              </ListItem>
            ))}
          </List>

          <Button
            colorScheme={pkg.color}
            size="lg"
            onClick={() => onSelect(pkg)}
          >
            Select Plan
          </Button>
        </VStack>
      </Box>
    </MotionBox>
  );
};

const PurchasedPlan = ({ pkg }) => {
  const bg = useColorModeValue("white", "gray.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Box
      bg={bg}
      p={6}
      borderRadius="lg"
      border="1px"
      borderColor={borderColor}
      w="100%"
    >
      <VStack spacing={4} align="stretch">
        <HStack justify="space-between">
          <VStack align="start" spacing={1}>
            <Heading size="md" color={`${pkg.color}.500`}>
              Current Plan: {pkg.name}
            </Heading>
            <Text fontSize="lg" color="gray.500">
              {pkg.price}
            </Text>
          </VStack>
          <Badge colorScheme="green" p={2} borderRadius="md">
            Active
          </Badge>
        </HStack>

        <SimpleGrid columns={3} gap={4}>
          <VStack>
            <Icon as={FiCpu} boxSize={5} color={`${pkg.color}.500`} />
            <Text fontSize="sm" fontWeight="medium">
              {pkg.cpu}
            </Text>
          </VStack>
          <VStack>
            <Icon as={FiHardDrive} boxSize={5} color={`${pkg.color}.500`} />
            <Text fontSize="sm" fontWeight="medium">
              {pkg.storage}
            </Text>
          </VStack>
          <VStack>
            <Icon as={FiUsers} boxSize={5} color={`${pkg.color}.500`} />
            <Text fontSize="sm" fontWeight="medium">
              {pkg.players} Players
            </Text>
          </VStack>
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export function CreateWorld() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [purchasedPlan, setPurchasedPlan] = useState(null);
  const bg = useColorModeValue("white", "gray.800");
  const hoverBg = useColorModeValue("gray.50", "gray.700");

  const handleSelectPackage = (pkg) => {
    setSelectedPackage(pkg);
    setIsPaymentModalOpen(true);
  };

  const handlePaymentSuccess = () => {
    setPurchasedPlan(selectedPackage);
    setIsPaymentModalOpen(false);
  };

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8}>
        <Box w="100%">
          {!purchasedPlan ? (
            <>
              <Heading size="lg" mb={6}>
                Choose Your Server Package
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
                {serverPackages.map((pkg, index) => (
                  <PackageCard
                    key={pkg.name}
                    pkg={pkg}
                    onSelect={handleSelectPackage}
                    index={index}
                  />
                ))}
              </SimpleGrid>
            </>
          ) : (
            <>
              <PurchasedPlan pkg={purchasedPlan} />

              <Box bg={bg} borderRadius="xl" p={8} w="100%" mt={8}>
                <VStack spacing={8} align="stretch">
                  <Heading size="lg">Create New Server</Heading>

                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                    <VStack spacing={6} align="stretch">
                      <FormControl isRequired>
                        <FormLabel>World Name</FormLabel>
                        <Input placeholder="Enter world name" />
                      </FormControl>

                      <FormControl>
                        <FormLabel>Description</FormLabel>
                        <Textarea
                          placeholder="Describe your world..."
                          rows={4}
                        />
                      </FormControl>

                      <FormControl>
                        <FormLabel>Game Type</FormLabel>
                        <Select placeholder="Select game type">
                          <option value="rpg">RPG</option>
                          <option value="adventure">Adventure</option>
                          <option value="survival">Survival</option>
                          <option value="sandbox">Sandbox</option>
                        </Select>
                      </FormControl>

                      <FormControl>
                        <FormLabel>Max Players</FormLabel>
                        <Select defaultValue="10">
                          <option value="5">5 Players</option>
                          <option value="10">10 Players</option>
                          <option value="20">20 Players</option>
                          <option value="50">50 Players</option>
                          <option value="100">100 Players</option>
                        </Select>
                      </FormControl>
                    </VStack>

                    <VStack spacing={6} align="stretch">
                      <Box
                        borderWidth={2}
                        borderStyle="dashed"
                        borderRadius="xl"
                        p={8}
                        textAlign="center"
                        _hover={{
                          bg: hoverBg,
                        }}
                      >
                        <VStack spacing={4}>
                          <FiUpload size={40} />
                          <Text>
                            Drag and drop your world thumbnail here, or click to
                            browse
                          </Text>
                          <Button size="sm" variant="outline">
                            Choose File
                          </Button>
                        </VStack>
                      </Box>

                      <FormControl>
                        <FormLabel>World Privacy</FormLabel>
                        <Select defaultValue="public">
                          <option value="public">Public</option>
                          <option value="friends">Friends Only</option>
                          <option value="private">Private</option>
                        </Select>
                      </FormControl>

                      <FormControl>
                        <FormLabel>World Template</FormLabel>
                        <Select placeholder="Select a template">
                          <option value="empty">Empty World</option>
                          <option value="medieval">Medieval Town</option>
                          <option value="space">Space Station</option>
                          <option value="island">Tropical Island</option>
                        </Select>
                      </FormControl>
                    </VStack>
                  </SimpleGrid>

                  <Button
                    leftIcon={<FiSave />}
                    colorScheme="blue"
                    size="lg"
                    alignSelf="flex-end"
                  >
                    Create World
                  </Button>
                </VStack>
              </Box>
            </>
          )}
        </Box>
      </VStack>

      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        selectedPackage={selectedPackage}
        onPaymentSuccess={handlePaymentSuccess}
      />
    </Container>
  );
}
