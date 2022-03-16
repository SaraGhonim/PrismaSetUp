import { Request, Response, NextFunction } from "express";

export const authorized = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).send("Access denied,There is no token");

  try {
    //verify that it is a valid token and not expired then call the next middleware
    return next();
  } catch (error) {
    res.status(400).send("Invalid Token");
  }
};

// const apiTokenSchema = Joi.object({
//     tokenId: Joi.number().integer().required(),
//   })

// Function will be called on every request using the auth strategy
// const validateAPIToken = async (
//     decoded: APITokenPayload,
//     request: Hapi.Request,
//     h: Hapi.ResponseToolkit,
//   ) => {
//     const { prisma } = request.server.app
//     const { tokenId } = decoded
//     // Validate the token payload adheres to the schema
//     const { error } = apiTokenSchema.validate(decoded)

//     if (error) {
//       request.log(['error', 'auth'], `API token error: ${error.message}`)
//       return { isValid: false }
//     }

//     try {
//       // Fetch the token from DB to verify it's valid
//       const fetchedToken = await prisma.token.findUnique({
//         where: {
//           id: tokenId,
//         },
//         include: {
//           user: true,
//         },
//       })

//       // Check if token could be found in database and is valid
//       if (!fetchedToken || !fetchedToken?.valid) {
//         return { isValid: false, errorMessage: 'Invalid Token' }
//       }

//       // Check token expiration
//       if (fetchedToken.expiration < new Date()) {
//         return { isValid: false, errorMessage: 'Token expired' }
//       }

//       // Get all the courses that the user is the teacher of
//       const teacherOf = await prisma.courseEnrollment.findMany({
//         where: {
//           userId: fetchedToken.userId,
//           role: UserRole.TEACHER,
//         },
//         select: {
//           courseId: true,
//         },
//       })

//       // The token is valid. Make the `userId`, `isAdmin`, and `teacherOf` to `credentials` which is available in route handlers via `request.auth.credentials`
//       return {
//         isValid: true,
//         credentials: {
//           tokenId: decoded.tokenId,
//           userId: fetchedToken.userId,
//           isAdmin: fetchedToken.user.isAdmin,
//           // convert teacherOf from an array of objects to an array of numbers
//           teacherOf: teacherOf.map(({ courseId }) => courseId),
//         },
//       }
//     } catch (error) {
//       request.log(['error', 'auth', 'db'], error)
//       return { isValid: false }
//     }
//   }
