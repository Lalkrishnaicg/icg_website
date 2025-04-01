"use client";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Container,
} from "@mui/material";
import React, { useState } from "react";
import Link from "next/link";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const cards = [
  {
    id: 1,
    title: "Strategic Workforce Planning",
    text: "Develop long-term workforce strategies aligned with organizational goals and analyze current and future workforce needs based on projections and trends.",
    image: "/assets/image_1.png",
    page: "icg/hr/hrPlanning",
  },
  {
    id: 2,
    title: "HR Strategy Development",
    image: "/assets/image_2.png",
    text: "Customize HR strategies and policies to align with organizational needs, goals, and culture.",
  },
  {
    id: 3,
    title: "Succession Planning",
    image: "/assets/image_3.png",
    text: "Identify and nurture future leaders while implementing succession plans for seamless leadership transitions and operational stability.",
  },
  {
    id: 4,
    title: "Change Management",
    image: "/assets/image_4.png",
    text: "Support organizational change initiatives through communication strategies to facilitate smooth transitions and enhance employee engagement.",
  },
  {
    id: 5,
    title: "Change Management",
    image: "/assets/image_4.png",
    text: "Support organizational change initiatives through communication strategies to facilitate smooth transitions and enhance employee engagement.",
  },
];

const HrPlanning = () => {
  const [isHovered, setIsHovered] = useState(false);
  const CustomCard = ({ text, image, page, title }) => (
    //   <Link href={`/${page}`} passHref>
    <Box
      sx={{
        // border: "1px solid",
        display: "flex",
        flexDirection: "column",
        //  borderRadius: 2,
        //  boxShadow: 1,
        // "&:hover": { boxShadow: 6 },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={title}
        sx={{ objectFit: "cover" }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
    </Box>
    //   </Link>
  );
  return (
    <Box>
      <Box>
        <Typography
          sx={{
            fontSize: { md: 80, xs: 50 },
            // pl: { md: 23 },
            px: { md: 8 },
          }}
        >
          HR Planning
        </Typography>
      </Box>
      <Grid
        container
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box sx={{ py: { md: 8, xs: 4 }, px: { md: 8, xs: 1 } }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={12}>
              <Typography
                sx={{
                  fontSize: { md: 36, xs: 26 },
                  textDecoration: "underline",
                  textUnderlineOffset: "0.4em",
                }}
              >
                What are HR Planning Services?
              </Typography>
              <Box>
                <Typography variant="body1" sx={{ fontSize: 22, mt: 4 }}>
                  HR Planning Services involve strategic initiatives aimed at
                  aligning an organization's human resources with its business
                  objectives. This encompasses a range of activities, including
                  workforce analysis, forecasting future workforce needs, talent
                  acquisition, succession planning, and change management. The
                  goal is to ensure that the organization has the right talent
                  in the right place at the right time to achieve its goals
                  effectively. HR Planning Services play a critical role in
                  optimizing resource allocation, improving workforce
                  productivity, enhancing employee satisfaction, and mitigating
                  risks associated with talent shortages. These services are
                  essential for organizations to adapt to changing market
                  conditions, foster innovation, and maintain a competitive edge
                  in today's dynamic business landscape.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={12}>
              <Box
                component="img"
                src="/assets/history_image.jpg"
                alt="Vision"
                sx={{
                  width: "100%",
                  height: 500,
                  borderRadius: "30px",
                  objectFit: "cover", // Ensures the image covers the area without stretching

                  //  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={6} alignItems="center" sx={{ mt: 2 }}>
            <Grid
              item
              xs={12}
              md={12}
              sx={{ backgroundColor: "#dde4f0", py: 4 }}
            >
              <Typography
                sx={{
                  fontSize: { md: 36, xs: 26 },
                  textDecoration: "underline",
                  textUnderlineOffset: "0.4em",
                }}
              >
                Why choose ICG for HR Planning?
              </Typography>
              <Box>
                <Typography variant="body1" sx={{ fontSize: 22, mt: 4 }}>
                  Select ICG for your HR Planning needs for our dedication to
                  crafting bespoke strategies that align precisely with your
                  organizational objectives. Utilizing cutting-edge analytics,
                  proactive communication channels, and profound industry
                  knowledge, we ensure optimal resource utilization, risk
                  mitigation, and a culture of innovation within your
                  organization. By tailoring our approach to your unique needs,
                  we facilitate efficient decision-making processes, enhance
                  workforce productivity, and foster an environment conducive to
                  growth and adaptation in the ever-evolving business
                  environment. Trust ICG to navigate the complexities of HR
                  planning with finesse, positioning your organization for
                  sustained success and resilience amidst industry challenges.
                </Typography>
              </Box>
              <Grid item xs={12} md={12}>
                <Box
                  component="img"
                  src="/assets/history_image.jpg"
                  alt="Vision"
                  sx={{
                    width: "100%",
                    mt: 4,
                    height: 500,
                    borderRadius: "30px",
                    objectFit: "cover", // Ensures the image covers the area without stretching

                    //  borderRadius: "10px",
                    // boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              fontSize: 36,
              textDecoration: "underline",
              textUnderlineOffset: "0.4em",
            }}
          >
            Why choose ICG for HR Planning?
          </Typography>
          <Box>
            <Grid
              container
              spacing={6}
              justifyContent="center"
              sx={{ pt: 7 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {cards.map((card) => (
                <Grid
                  item
                  key={card.id}
                  xs={12}
                  sm={6}
                  display="flex"
                  justifyContent="center"
                >
                  <CustomCard {...card} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
        <Box
          sx={{
            justifyItems: "center",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            pt: 10,
            width: { md: "60%", xs: "100%" },
            bgcolor: "white",
          }}
        >
          <Typography sx={{ fontSize: 48, mb: 7 }}>
            Frequently Asked Questions
          </Typography>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{
                bgcolor: "white", // Sets the background color to white
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontSize: { md: 20, xs: 18 },
                  fontWeight: "bold",
                  bgcolor: "white", // Sets the background color to white
                }}
              >
                How can ICG assist with Strategic Workforce Planning service
                entail to align with organizational goals?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: "white", // Ensures the details section also has a white background
              }}
            >
              <Typography>
                CG aids in Strategic Workforce Planning by assessing your
                current workforce, aligning strategies with business goals, and
                bridging talent gaps. We identify key skills, forecast future
                needs, and offer guidance on optimization, succession planning,
                and talent development for business success.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{
                bgcolor: "white", // Ensures the details section also has a white background
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontSize: { md: 20, xs: 18 },
                  fontWeight: "bold",
                  bgcolor: "white",
                }}
              >
                {" "}
                How do you customize HR strategies in your HR Strategy
                Development service to match our company's unique needs and
                culture?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: "white", // Ensures the details section also has a white background
              }}
            >
              <Typography>
                In our HR Strategy Development service, we customize HR
                strategies by conducting thorough evaluations of your company's
                unique needs, culture, and goals. This involves collaborating
                closely with your team to design policies and procedures that
                reflect your organization's values and objectives.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{
                bgcolor: "white", // Ensures the details section also has a white background
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontSize: { md: 20, xs: 18 },
                  fontWeight: "bold",
                  bgcolor: "white", // Ensures the details section also has a white background
                }}
              >
                {" "}
                Can you provide examples of how Workforce Analytics has helped
                organizations identify talent development opportunities?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: "white", // Ensures the details section also has a white background
              }}
            >
              <Typography>
                Workforce Analytics has helped organizations identify talent
                development opportunities by analyzing data on employee
                performance, skills gaps, and career progression. For example,
                we've utilized analytics to pinpoint areas where additional
                training or recruitment efforts could enhance organizational
                capabilities.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{
                bgcolor: "white", // Ensures the details section also has a white background
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontSize: { md: 20, xs: 18 },
                  fontWeight: "bold",
                  bgcolor: "white",
                }}
              >
                {" "}
                What methodologies do you use in Succession Planning to ensure
                seamless leadership transitions?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: "white", // Ensures the details section also has a white background
              }}
            >
              <Typography>
                In Succession Planning, we utilize methodologies such as talent
                mapping, skills assessments, and leadership development programs
                to ensure seamless leadership transitions. By identifying and
                nurturing high-potential employees, we prepare them to assume
                key roles within the organization when needed.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{
                bgcolor: "white", // Ensures the details section also has a white background
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontSize: { md: 20, xs: 18 },
                  fontWeight: "bold",
                  bgcolor: "white",
                }}
              >
                {" "}
                How do you facilitate effective communication during Change
                Management to enhance employee engagement?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: "white", // Ensures the details section also has a white background
              }}
            >
              <Typography>
                During Change Management, we facilitate effective communication
                through various channels such as town hall meetings, team
                workshops, and digital platforms. By promoting transparency,
                soliciting feedback, and addressing concerns, we enhance
                employee engagement and buy-in during periods of transition.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{
                bgcolor: "white", // Ensures the details section also has a white background
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontSize: { md: 20, xs: 18 },
                  fontWeight: "bold",
                  bgcolor: "white",
                }}
              >
                {" "}
                What sets your HR Planning Services apart from other consultancy
                firms in terms of optimizing resource allocation?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: "white", // Ensures the details section also has a white background
              }}
            >
              <Typography>
                Our HR Planning Services stand out from other consultancy firms
                by employing advanced analytics and predictive modeling
                techniques to optimize resource allocation. By leveraging
                data-driven insights, we help organizations make informed
                decisions about workforce planning, budgeting, and investment in
                human capital.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{
                bgcolor: "white", // Ensures the details section also has a white background
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontSize: { md: 20, xs: 18 },
                  fontWeight: "bold",
                  bgcolor: "white", // Ensures the details section also has a white background
                }}
              >
                {" "}
                Can you elaborate on how your services help mitigate risks
                associated with talent shortages?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: "white", // Ensures the details section also has a white background
              }}
            >
              <Typography>
                Our services help mitigate risks associated with talent
                shortages by implementing proactive recruitment strategies,
                talent development programs, and succession planning
                initiatives. By identifying potential gaps in skills or
                expertise, we enable organizations to address these challenges
                proactively.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{
                bgcolor: "white", // Ensures the details section also has a white background
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontSize: { md: 20, xs: 18 },
                  fontWeight: "bold",
                  bgcolor: "white",
                }}
              >
                {" "}
                How do you ensure that your HR Planning Services remain
                adaptable to changing market conditions?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: "white", // Ensures the details section also has a white background
              }}
            >
              <Typography>
                We ensure that our HR Planning Services remain adaptable to
                changing market conditions by regularly reviewing and updating
                our strategies, policies, and procedures. This includes staying
                abreast of industry trends, regulatory changes, and emerging
                best practices to ensure relevance and effectiveness.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{
                bgcolor: "white", // Ensures the details section also has a white background
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontSize: { md: 20, xs: 18 },
                  fontWeight: "bold",
                  bgcolor: "white",
                }}
              >
                {" "}
                What metrics do you use to measure the success of your HR
                Planning initiatives?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: "white", // Ensures the details section also has a white background
              }}
            >
              <Typography>
                We measure the success of our HR Planning initiatives using a
                variety of metrics, including employee retention rates, talent
                acquisition costs, productivity improvements, and employee
                satisfaction scores. These metrics provide valuable insights
                into the impact of our services on organizational performance
                and effectiveness.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{
                bgcolor: "white", // Ensures the details section also has a white background
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontSize: { md: 20, xs: 18 },
                  fontWeight: "bold",
                  bgcolor: "white",
                }}
              >
                {" "}
                Can you provide case studies or testimonials from previous
                clients who have benefited from your HR Planning Services?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: "white", // Ensures the details section also has a white background
              }}
            >
              <Typography>
                We can provide case studies and testimonials from previous
                clients who have benefited from our HR Planning Services. These
                real-world examples demonstrate how our strategic approach to
                workforce planning, talent management, and organizational
                development has helped organizations achieve their goals and
                overcome challenges.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Grid>
    </Box>
  );
};

export default HrPlanning;
