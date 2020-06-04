#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

#Depending on the operating system of the host machines(s) that will build or run the containers, the image specified in the FROM statement may need to be changed.
#For more information, please see https://aka.ms/containercompat

FROM microsoft/dotnet:3.1-sdk as build

ARG BUILDCONFIG-RELEASE
ARG VERSION=1.0.0

COPY ClicknEat.csproj /bild/

RUN dotnet restore ./build/ClicknEat.csproj

COPY . ./build/
WORKDIR /build/
RUN dotnet publish ./ClicknEat.csproj -c $BUILDCONFIG -o out /p:Version=$VERSION

FROM microsoft/dotnet:3.1-aspnetcore-runtime
WORKDIR /app

COPY --from=build /build/out .

ENTRYPOINT ["dotnet", "ClicknEat.dll"]
